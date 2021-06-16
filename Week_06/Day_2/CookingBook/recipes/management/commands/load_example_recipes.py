from django.core.management.base import BaseCommand
from mixer.backend.django import mixer


class Command(BaseCommand):

    def handle(self, *args, **options):
        mixer.cycle(100).blend('recipes.Recipe')