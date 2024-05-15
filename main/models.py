from django.db import models


class Indicators(models.Model):
    question = models.CharField(max_length=300, unique=True, verbose_name='Вопрос')

    class Meta:
        db_table = 'indicator'
        verbose_name = 'Индикатор'
        verbose_name_plural = 'Индикаторы'

    def __str__(self):
        return self.question


class Questions(models.Model):
# Create your models here.
    question = models.CharField(max_length=300, unique=True, verbose_name='вопрос')
    target_score = models.IntegerField(verbose_name='Таргетированный показатель')


    class Meta:
        db_table = 'question'
        verbose_name = 'Вопрос'
        verbose_name_plural = 'Вопросы'

    def __str__(self):
        return self.question
