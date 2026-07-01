from google.adk import Agent
from google.adk import Workflow
from google.adk import Event
from pydantic import BaseModel

process_message = Agent(
    name="process_message",
    model="gemini-2.5-flash",
    instruction="""Classify user message into either "BUG_CATEGORY", "CUSTOMER_SUPPORT_CATEGORY", "LOGISTICS_CATEGORY", "ELSE". If you think a message applies to more than one category,
      reply with a comma separated list of categories.
   """,
    output_schema=str,
)


answer_message = Agent(
    name="answer_message",
    model="gemini-2.5-flash",
    instruction="""`Write a brief response to a user like you are customer support""",
    output_schema=str,
)


def router(node_input: str):
    routes = node_input.split(",")
    routes = [route.strip() for route in routes]
    return Event(route=routes)

def response_1_bug():
    return Event(message="Handling bug...")

def response_2_support():
    return Event(message="Handling customer support...")

def response_3_logistics():
    return Event(message="Handling logistics...")

root_agent = Workflow(
   name="routing_workflow",
   edges=[
       ("START", process_message, router),
       ( router,
           {
               "BUG_CATEGORY": response_1_bug,
               "CUSTOMER_SUPPORT_CATEGORY": response_2_support,
               "LOGISTICS_CATEGORY": response_3_logistics,
               "ELSE" : answer_message
           }
       ),
   ],
)