from django.contrib import admin
from .models import Recipe

# to show CookingBook on recipe page
admin.site.register(Recipe)
