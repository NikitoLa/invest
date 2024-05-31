from django.http import HttpResponse, HttpResponseRedirect
from django.contrib import auth
from django.shortcuts import redirect, render
from django.urls import reverse

from main.forms import UserLoginForm  ,UserLogupForm
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

def Asse(request):
    assets = Assets.objects.all()

    context = {
        'title': 'Invest',
        'content': 'Бумаги',
        'assets': assets,
    }
    return render(request, 'main/page7-Assets.html', context)

def Logup(request):
    if request.method == 'POST':
        form = UserLogupForm(data=request.POST)
        if form.is_valid():
            form.save()
            user = form.instance
            auth.login(request, user)
            return HttpResponseRedirect(reverse('main:index'))
    else:
        form = UserLogupForm()

    context = {
        'title': 'Invest - Регистрация',
        'form': form
    }
    return render(request, 'main/page1-1-LogUp.html', context)

def Login(request):
    if request.method == 'POST':
        form = UserLoginForm(data=request.POST)
        if form.is_valid():
            username = request.POST['username']
            password = request.POST['password']
            user = auth.authenticate(username=username, password=password)
            if user:
                auth.login(request, user)
                return HttpResponseRedirect(reverse('main:index'))
    else:
        form = UserLoginForm()

    context = {
        'title': 'Invest - Авторизация',
        'form': form
    }
    return render(request, 'main/page1-2-LogIn.html', context)

def about(request):
    context = {
        'title': 'Home',
        'content': 'О нас - Invest',
        'text_on_page': "Текс почему этот сайт такой классный"
    }
    return render(request, 'main/about.html', context)

def Logout(request):
    auth.logout(request)
    return redirect(reverse('main:Logup'))
