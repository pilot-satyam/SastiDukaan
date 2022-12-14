from django.shortcuts import render
from django.http import JsonResponse    
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializer import ProductSerializer
from .products import products

# Create your views here.
@api_view(['GET']) #only we need to fetch hence we are using this
def getRoutes(request):
    routes =[
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>',
        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/'
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products,many = True)
    #return Response(products)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):

    #using the below code we are getting error as the price is not changing in the products page
    # product = None
    # for i in products:
    #     if i['_id'] == pk: #we are doing this since we are using a dictionary
    #         product = i
    #         break
    product = Product.objects.get(_id = pk)
    serializer = ProductSerializer(product,many=False)
    return Response(serializer.data)