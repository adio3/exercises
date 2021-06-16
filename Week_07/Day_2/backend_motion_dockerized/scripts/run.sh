python manage.py migrate
python manage.py collectstatic --no-input
gunicorn -w 4 -b 0.0.0.0:8000 backend_motion.wsgi:application
