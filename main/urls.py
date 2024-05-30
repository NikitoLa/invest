from django.urls import path

from main import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('page7-Assets.html/', views.Asse, name='assets'),
    path('page8-Questions.html/', views.Indicat, name='indicators'),
    path('page9-Multipliers.html/', views.Quest, name='questions'),
]
