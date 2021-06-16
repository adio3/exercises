from rest_framework import serializers
from .models import CookingBook


class CookingBookRecipesSerializer(serializers.ModelSerializer):
    class Meta:
        model = CookingBook
        fields = ['id', 'title', 'description', 'author', 'favourite', 'created', 'updated']
        read_only_fields = fields

