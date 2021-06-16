from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Post(models.Model):
    text_content = models.TextField()

    created = models.DateTimeField(
        auto_now_add=True
    )

    last_update = models.DateTimeField(
        auto_now=True
    )

    author = models.ForeignKey(to=User, null=True, blank=True, on_delete=models.CASCADE, related_name="posts")

    like_count = models.ManyToManyField(User, blank=True, related_name="posts_liked")