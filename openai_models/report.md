**Summary**

Testing OpenAI's 5th generation models on various tasks to see what they can do and how they compare. Tried GPT-5.2, GPT-5-mini, GPT-5-nano, GPT-5.2-codex, and GPT-5.1-codex-max for website generation, tested deep research on camera technology, played with audio models for speech synthesis and transcription, and generated images for website mockups. 

**What I Tested**

Website generation using a furniture company example. First tried a basic prompt asking for HTML with Tailwind CSS. Results on Jan 28, 2026 showed big differences. GPT-5.2 took 90 seconds and produced the best result with good design and dynamic elements, though mobile responsiveness needed work. GPT-5-mini and GPT-5-nano were slower at 145s and 171s and produced poor designs with missing images. Codex models were faster around 50s but gave simpler outputs.

After reading the prompting guides, I rebuilt the prompt with way more detail in website_gen_prompt.py. Specified everything including brand details for "Atelier Grove" furniture company, exact sections needed, design constraints, and output format. This made a huge difference. All models produced much better results. GPT-5.2 took 231s and made a beautiful responsive site, GPT-5-mini did 141s with solid results, GPT-5-nano at 91s was simpler, GPT-5.2-codex at 76s matched 5.2 quality with great images, and GPT-5.1-codex-max was fastest at 38s with similar quality.

Tested reasoning and verbosity parameters by generating websites with high, medium, and low settings. Found basically no difference when the prompt is already detailed. Seems like these parameters don't matter much if you write good prompts.

Deep research test used deep_research_prompt.py asking about photo cameras. Requested history, how they work, film vs digital, camera parts, physics of light capture, depth of field, camera settings, and industry trends. The model ran for about 20 checks showing "in_progress" then completed. Output in deep_research/deep_research_output.md was over 300 lines with proper citations to Britannica, museums, CIPA statistics, and technical resources. Covered everything from camera obscura to 2026 computational photography with solid technical detail but lacked depth in its responce using on 5% of its output window. Also, some sources returned error 404.

Audio experiments tested generation, transcription, and text-to-speech. Used gpt-audio to create a 15-second office conversation between two people with different speaking styles saved to conversation.wav. Transcription with gpt-4o-transcribe-diarize initially failed to tell apart similar voices but worked when I made the intonations more distinct. With clearly different voices in converation_with_different_voices.mp3 it worked great and could assign names, translate, and add timestamps. Text-to-speech with gpt-4o-mini-tts using coral voice worked fine but sounds robotic, not realistic enough for most uses.

Image generation with gpt-image-1.5 started with a simple sea otter test. Then tried generating hero section designs for a B2B SaaS website with detailed prompts. Made 5 variations saved as website_hero_section_0.png through website_hero_section_4.png. Results were decent with good potential for design work but need tuning.

**Key Findings**

- Prompt quality matters way more than model choice. With a detailed structured prompt, even smaller models produce professional results.
- GPT-5.2 gives the best quality but is slowest. Codex models are 2-5x faster and great for code tasks especially with IDE integration. Mini and nano are cheaper but need careful prompting.
- Reasoning and verbosity settings don't help much when prompts are already good. Better to spend time on prompt engineering than tweaking parameters.
- Deep research works well for creating reports with proper citations but it lacks depth in its responce using on 5% of its output window. Also, some sources returned error 404. Audio models handle most tasks but voice quality is still noticeably synthetic. Image generation shows promise but needs iteration.


**Resources Used**

- https://platform.openai.com/docs/guides/deep-research
- https://developers.openai.com/codex/ide
- https://cookbook.openai.com/examples/gpt-5/gpt-5-2_prompting_guide
- https://cookbook.openai.com/examples/gpt-5/codex_prompting_guide
- https://www.youtube.com/watch?v=px7XlbYgk7I
- https://www.youtube.com/watch?v=fK_bm84N7bs
- https://www.youtube.com/watch?v=i8_Pz7sBp_M
