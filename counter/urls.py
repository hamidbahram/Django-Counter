from django.urls import path, re_path
from . import views

# app_name = "counter"

urlpatterns = [
    path('<int:id>/', views.CounterView, name="count"),
    path('add/<int:id>/', views.add_value, name="add"),
    path('', views.homepage, name="home"),
    path('api/', views.CounterListView.as_view(), name="list"),
    path('api/edit/<int:id>/', views.CounterEditView.as_view(), name="edit"),
]
