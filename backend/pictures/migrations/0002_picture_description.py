# Generated by Django 4.2.7 on 2024-10-27 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pictures', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='picture',
            name='description',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
