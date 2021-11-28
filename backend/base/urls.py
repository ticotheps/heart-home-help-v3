from django.urls import path
from . import views

urlpatterns = {
    path('', views.getRoutes, name="routes"),
    path('needs/', views.getNeeds, name="needs"),
}