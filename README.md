# 2025.1-T01-FranquiAcademia
Repositório de projeto da disciplina de REQ-T1.

#Branch pattern
    we have two type of code on this repo
        -Project Code 
        -Document Code
    For this we use some branchs, we will start explain for Project code:


    Branchs:
        -main:
        -FT_developer:
        -BE_developer:
        -FT-<feature>_<task_number>:
        -BE-<feature>_<task_number>:

    Documenting branch:
        -gh-pages: 
        -git-pages:
        -mkdocs:
        -MD-<feature>_<task_number>:

    Imagine you are one of the luckys members of gitpushUps, and you have to code a new feature for the project or for the Documenting. They are one exemple:
    For create the nem brahcs you NEED to know somethings:
        - If are a backend task, frontend task or a Documenting task.
        - The task_number.
    
    ```bash

    #First step
        #if are a project task
            git checkout developer
        #if are a Documenting task
            git checkout git-pages

    #second step
        #if are Documenting task:
            git checkout -b "MD-<feature>_<task_number>"
        #if are Backend task:
            git checkout -b "BE-<feature>_<task_number>"
        #if are frontend task:
            git checkout -b "FT-<feature>_<task_number>"

    ```
    

    


    
