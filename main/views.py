from django.http import HttpResponse
from django.shortcuts import render

from main.models import Indicators, Questions, Assets


def index(request):
    context = {
        'title': 'Invest',
        'content': 'Главная страница приложения - Invest',
    }
    return render(request, 'main/index.html', context)

def Quest(request):
    questions = Questions.objects.all()
    context = {
        'title': 'Invest',
        'content': 'Мультипликаторы',
        'questions': questions,
    }
    return render(request, 'main/page9-Multipliers.html', context)

def Indicat(request):
    indicators = Indicators.objects.all()

    context = {
        'title': 'Invest',
        'content': 'Вопросы',
        'indicators': indicators,
    }
    return render(request, 'main/page8-Questions.html', context)


def about(request):
    context = {
        'title': 'Home',
        'content': 'О нас - Invest',
        'text_on_page': "Текс почему этот сайт такой классный"
    }
    return render(request, 'main/about.html', context)

def Asse(request):
    assets = Assets.objects.all()

    context = {
        'title': 'Invest',
        'content': 'Бумаги',
        'assets': assets,
    }
    return render(request, 'main/page-Assets.html', context)
