from django.http import HttpResponse
from django.shortcuts import render

from main.models import Indicators


def index(request):

    indicators = Indicators.objects.all()
    context = {
        'title': 'Home',
        'content': 'Главная страница приложения - Invest',
        'indicators': indicators,
        'list': ['first', 'Second']
    }
    return render(request, 'main/index.html', context)


def about(request):
    return HttpResponse("About page")
