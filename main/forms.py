from dataclasses import fields
from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from main.models import User

class UserLoginForm(AuthenticationForm):

    username = forms.CharField()   # при таком подхоже пароль не скрывается
    password = forms.CharField()

    # при таком подхоже пароль скрывается

    # username = forms.CharField(
    #     widget=forms.TextInput(attrs={"autofocus": True,
    #                                     'class': 'form-control',
    #                                     'placeholder': 'Введите имя пользователя'})
    # )
    # password = forms.CharField(
    #     widget=forms.PasswordInput(attrs={"autocomplete": "current-password",
    #                                         'class': 'form-control',
    #                                         'placeholder': 'Введите пароль'}),
    # )
    class Meta:
        model = User
        fields = ['username', 'password']


class UserLogupForm(UserCreationForm):
    class Meta:
        model = User
        fields = (
            'first_name',
            'last_name',
            'patronymic',
            'username',
            'email',
            'password1',
            'password2',
            )
        last_name = forms.CharField()
        first_name = forms.CharField()
        patronymic = forms.CharField()
        username = forms.CharField()
        email = forms.CharField()
        password1 = forms.CharField()
        password2 = forms.CharField()
