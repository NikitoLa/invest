from django.urls import path

from main import views

app_name = 'main'

urlpatterns = [
    path('', views.Logup, name='Logup'),
    path('page1-2-LogIn.html/', views.Login, name='Login'),
    path('index.html', views.index, name='index'),
    path('page7-Assets.html/', views.Asse, name='assets'),
    path('page8-Questions.html/', views.Indicat, name='indicators'),
    path('page9-Multipliers.html/', views.Quest, name='questions'),
    path('', views.Logout, name='Logout'),
    path('about/', views.about, name='about'),
]
