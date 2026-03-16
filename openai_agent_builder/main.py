from agents import WebSearchTool, Agent, ModelSettings, TResponseInputItem, Runner, RunConfig, trace
from pydantic import BaseModel
from openai.types.shared.reasoning import Reasoning
import asyncio  
import json

# Tool definitions
web_search_preview = WebSearchTool(
  search_context_size="medium",
  user_location={
    "type": "approximate"
  }
)
class MovieEnricherSchema(BaseModel):
  name: str
  author: str
  rating: float
  comment: str


movie_enricher = Agent(
  name="Movie Enricher",
  instructions="""You are a structured data extraction assistant. Your job is to parse my movie list and return a JSON array where each entry represents one movie. My list may be written in English, Ukrainian, or Russian — mixed freely. Sometimes I include the director's name, sometimes not. I use emojis to rate movies, where ✅  is the lowest (meaning 1/1) and ✅✅✅ (meaning 3/3) is my highest standard rating, though I occasionally give more ✅ for truly exceptional films. I may also include other emojis or freeform comments to capture my emotional reaction.
For each movie, return a JSON object with these fields:
- name: Movie title in its original language (English for non-Ukrainian, Polish, German or russian movies)
- author: Director's name, or studio name if the director is unknown, or null if neither is available
- rating: My emoji rating (basically your task is to just calculate how many "✅"s I have)
- comment: how my original comment looks like
If you cannot parse or identify an entry, return an object with all fields as null and explain the issue in the comment field. If the movie has no ranking, it means that I have not watched it yet.
Always return a JSON array, even for a single movie. Do not add any explanation outside the JSON.""",
  model="gpt-5-nano",
  tools=[
    web_search_preview
  ],
  output_type=MovieEnricherSchema,
  model_settings=ModelSettings(
    store=True,
    reasoning=Reasoning(
      effort="low"
    )
  )
)


class WorkflowInput(BaseModel):
  input_as_text: str


# Main code entrypoint
async def run_workflow(workflow_input: WorkflowInput):
  with trace("Movie Enricher"):
    state = {

    }
    workflow = workflow_input.model_dump()
    conversation_history: list[TResponseInputItem] = [
      {
        "role": "user",
        "content": [
          {
            "type": "input_text",
            "text": workflow["input_as_text"]
          }
        ]
      }
    ]
    movie_enricher_result_temp = await Runner.run(
      movie_enricher,
      input=[
        *conversation_history
      ],
      run_config=RunConfig(trace_metadata={
        "__trace_source__": "agent-builder",
        "workflow_id": "wf_6994b90992808190839e2f6c7afd86c20046af9f765d481a"
      })
    )

    conversation_history.extend([item.to_input_item() for item in movie_enricher_result_temp.new_items])

    movie_enricher_result = {
      "output_text": movie_enricher_result_temp.final_output.json(),
      "output_parsed": movie_enricher_result_temp.final_output.model_dump()
    }
    print("Agent result: ", movie_enricher_result)
    return movie_enricher_result

if __name__ == "__main__":
  with open("openai_agent_builder/movie_list.txt", "r", encoding="utf-8") as f:
    input_text = f.read()
  movies = [line.strip() for line in input_text.split("\n") if line.strip()]
  results = []
  for movie in movies:
    print("Movie: ", movie)
    input_text = "Please, enrich the following movie: " + movie
    result = asyncio.run(run_workflow(WorkflowInput(input_as_text=input_text)))
    result = result["output_parsed"]
    results.append(result)
    print("Result: ", result)
  with open("openai_agent_builder/movie_list_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=4, ensure_ascii=False)