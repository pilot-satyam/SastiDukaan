# Generated by Django 4.1.1 on 2022-11-22 11:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='decription',
            new_name='description',
        ),
    ]