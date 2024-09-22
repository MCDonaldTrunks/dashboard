from django.urls import path
from .views import LoginView, LogoutView, register, sample_data
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('login/', LoginView.as_view(), name='token_obtain_pair'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('sample/', sample_data, name='sample_data'),
    path('register/', register, name='register'),
]
