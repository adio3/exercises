from django.http import HttpResponse, JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404
from .models import ReceipeModel
import json


class WelcomeView(View):
    def get(self, request):
        return HttpResponse('Hello, welcome to your first Django view! This is exciting!')





class GetAllReceipesView(View):
    def get(self, request):
        receipes = ReceipeModel.objects.all()
        response = [{
            "id": receipe.id,
            "title": receipe.title,
            "description": receipe.description,
            "ingredients": receipe.ingredients,
            "difficulty": receipe.difficulty,
            "favourite": receipe.favourite,
            "created": receipe.created,
            "updated": receipe.updated

        } for receipe in receipes]
        return JsonResponse(response, safe=False)

    def post(self, request, *args, **kwargs):
        data = json.loads(self.request.body)
        receipe, create = ReceipeModel.objects.get_or_create(
            title=data.get('title'),
            description=data.get('description'),
            ingredients=data.get('ingredients'),
            difficulty=data.get('difficulty'),
            favourite=data.get('favourite')

        )
        response = {
            "id": receipe.id,
            "title": receipe.title,
            "description": receipe.description,
            "ingredients": receipe.ingredients,
            "difficulty": receipe.difficulty,
            "favourite": receipe.favourite,
            "created": receipe.created,
            "updated": receipe.updated
        }
        return JsonResponse(response)

class handleOneReceipe(View):
    def get(self, request, *args, **kwargs):
        id = kwargs.get('pk')
        receipe = get_object_or_404(ReceipeModel, pk=id)
        response = {
            "id": receipe.id,
            "title": receipe.title,
            "description": receipe.description,
            "ingredients": receipe.ingredients,
            "difficulty": receipe.difficulty,
            "favourite": receipe.favourite,
            "created": receipe.created,
            "updated": receipe.updated
        }

        return JsonResponse(response)

    def patch(self, request, *args, **kwargs):
        id = kwargs.get('pk')
        data = json.loads(self.request.body)
        receipe = get_object_or_404(ReceipeModel, pk=id)
        for key, value in data.items():
            if key in ['title', 'description', 'ingredients', 'difficulty', 'favourite']:
                if key == 'difficulty' and value not in [1, 2, 3]:
                    continue
                setattr(receipe, key, value)
        response = {
            "id": receipe.id,
            "title": receipe.title,
            "description": receipe.description,
            "ingredients": receipe.ingredients,
            "difficulty": receipe.difficulty,
            "favourite": receipe.favourite,
            "created": receipe.created,
            "updated": receipe.updated
        }
        return JsonResponse(response)

    def delete(self, request, *args, **kwargs):
        id = kwargs.get('pk')
        receipe = get_object_or_404(ReceipeModel, pk=id)
        receipe.delete()
        return HttpResponse(status=204)


