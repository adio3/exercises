Goals: 

       1. Build the image from the Dockerfile.

       2. Run python manage.py runserver 0:8000 inside the container and see the running django app.
       
Problems: 

       1. There are a few problems in the Dockerfile that you need to fix for the build to go through.
          Try to build the image and use the error logs to fix them.
       2. Once the build has gone through start the container with the appropiate command while opening port 8000. 
          When you are logged in the problem is that the environment is not active. 
          Find the problem in the Dockerfile. 
