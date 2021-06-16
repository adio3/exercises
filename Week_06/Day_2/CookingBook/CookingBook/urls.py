"""CookingBook URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from typing import List, Union

import rest_framework
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, URLResolver, URLPattern

# ADMIN
from django.contrib import admin

# JWT AUTHENTICATION
from rest_framework_simplejwt import views as jwt_views

# DOCUMENTATION
from rest_framework import permissions, authentication
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# DOCUMENTATION
schema_view = get_schema_view(
   openapi.Info(
      title="Django API",
      default_version='v1',
      description="Description of your Django App",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="learn@propulsionacademy.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=False, # Set to False restrict access to protected endpoints
   permission_classes=(permissions.DjangoModelPermissions,), # Permissions for docs access
)

# JWT AUTHENTICATION
jwt_views = [
    path('', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
]

urlpatterns = [
    # ADMIN
    path('admin/', admin.site.urls),
    # JWT AUTHENTICATION
    path('api/auth/', include(jwt_views)),
    # API
    path('api/recipes/', include('recipes.urls')),
    path('api/cookbooks/', include('cookbooks.urls')),
    path('api/users/', include('users.urls')),
    # DOCUMENTATION
    path('api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
# Show hidden staticfiles in development
if settings.DEBUG:  # we only want to add these urls in debug mode. You will learn about serving in production next week
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

