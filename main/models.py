from django.db import models
from django.contrib.auth.models import AbstractUser


class Indicators(models.Model):
    question = models.CharField(max_length=300, unique=True, verbose_name="Вопрос")

    class Meta:
        db_table = "indicator"
        verbose_name = "Индикатор"
        verbose_name_plural = "Индикаторы"

    def __str__(self):
        return self.question


class Questions(models.Model):
    # Create your models here.
    question = models.CharField(max_length=300, unique=True, verbose_name="вопрос")
    target_score = models.IntegerField(verbose_name="Таргетированный показатель")

    class Meta:
        db_table = "question"
        verbose_name = "Вопрос"
        verbose_name_plural = "Вопросы"

    def __str__(self):
        return self.question


class Assets(models.Model):
    asset = models.CharField(max_length=100, verbose_name="актив")
    age = models.IntegerField(verbose_name="Возраст компании")
    d_div_e = models.FloatField(
        verbose_name="Отношение долга компании к ее капиталу (D/E)"
    )
    eps = models.FloatField(verbose_name="Чистая прибыль на 1 акцию (EPS)")
    p_div_e = models.FloatField(verbose_name="Переоценка акций (P/E)")
    p_div_bv = models.FloatField(
        verbose_name="Отношение капитализации к собственному капиталу (P/BV)"
    )
    p_div_s = models.FloatField(
        verbose_name="Отношение капиталищации к общей выручке(P/S)"
    )
    ev_div_ebitda = models.FloatField(
        verbose_name="Отношение стоимости компании к прибыли (EV/EBITDA)"
    )
    roe = models.FloatField(verbose_name="Чистая прибыль к собственному капиталу (ROE)")
    roa = models.FloatField(
        verbose_name="Чистая прибыль к средней стоимости активов (ROA)"
    )
    roe_min_roa_abs = models.FloatField(verbose_name="Абсолютная разница ROE и ROA")
    gross_margin = models.FloatField(
        verbose_name="Валовая прибыль к выручке gross margin"
    )
    ncav = models.FloatField(verbose_name="Чистая стоимость активов компании (NCAV)")
    asset_diff = models.FloatField(
        verbose_name="Изменение цены акции за последний год (%)"
    )

    class Meta:
        db_table = "asset"
        verbose_name = "Бумага"
        verbose_name_plural = "Бумаги"

    def __str__(self):
        return self.asset


class User(AbstractUser):
    patronymic = models.CharField(max_length=300, verbose_name="Отчество")

    class Meta:
        db_table = "user"
        verbose_name = "Пользователя"
        verbose_name_plural = "Пользователи"

    def __str__(self):
        return self.username
