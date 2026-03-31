--
name: prepare-report
description: Prepares a report for a given folder
argument-hint: [folder]
disable-model-invocation: false

---
After completing a learning topic, I want a `report.md` created inside that topic folder - in this case $ARGUMENTS. When I ask to prepare `report.md`, the agent should search that folder and summarize all relevant actions, logs, thoughts, and notes into a readable report. The report must be well structured with a short description at the beginning and a short summary at the end. The main body should contain the desciptions of methodology, flow and results of experiments. Describe what technology was used, what comments I provided etc. Build it in a way scientist makes a report of his experiment in a lab. 

Formatting rules for `report.md`:
- Keep formatting minimal; about 80% should be plain text.
- Allowed formatting: bold text, occasional bullet points, and very rare titles. No lines, emojist etc.
- Include references to other files and/or external URLs where relevant. Do not just provide reference to all outputs blindly. 
- End with a list of literature and sources used.
- Usage of tables is allowed. 
- Keep report length under 500 words.