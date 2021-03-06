# Generated by Django 4.0.5 on 2022-07-03 01:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('platforms', '0001_initial'),
        ('advertisers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contract',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('state', models.CharField(choices=[('CREATED', 'Created'), ('ACTIVE', 'Active'), ('CLOSED', 'Closed')], max_length=255)),
                ('payment_channel_address', models.CharField(blank=True, max_length=255)),
                ('advertiser', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='advertisers.advertiser')),
                ('platform', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='platforms.platform')),
            ],
        ),
    ]
