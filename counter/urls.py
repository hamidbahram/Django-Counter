from django.urls import path, re_path
from . import views



urlpatterns = [
    path('<int:id>/', views.CounterView, name="count"),
    path('add/<int:id>/', views.add_value, name="add"),
    path('home/', views.homepage),
]
