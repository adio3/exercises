from django.urls import path
from .views import ToggleFollowUserView, ListAllFollowees,ListAllFollowers

urlpatterns = [
    path('toggle-follow/<int:id>/',ToggleFollowUserView.as_view()),
    path('following/',ListAllFollowees.as_view()),
    path('followers/',ListAllFollowers.as_view())
]