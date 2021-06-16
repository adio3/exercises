from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsUserOrSuperuserOrReadOnly(BasePermission):
    """
    if GET => everyone can see it. if PUT/PATCH/DELETE => only user and superuser can do it
    """

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        return request.user == obj or request.user.is_superuser

class IsUserOrSuperuserOrDenied(BasePermission):
    """
    GET/PUT/PATCH/DELETE => only if requested user is requester and superuser
    """

    def has_object_permission(self, request, view, obj):
        return request.user == obj or request.user.is_superuser
