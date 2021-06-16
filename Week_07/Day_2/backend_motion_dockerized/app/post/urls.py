from django.urls import path
from .views import ListCreatePostsView, ToggleLike, GetUpdateDeletePostView,GetPostsFromFollowes, ListLikedView

urlpatterns = [
    path('', ListCreatePostsView.as_view()),
    path('toggle-like/<int:post_id>/', ToggleLike.as_view()),
    path('<int:pk>/', GetUpdateDeletePostView.as_view()),
    path('following/',GetPostsFromFollowes.as_view()),
    path('likes/', ListLikedView.as_view()),
]