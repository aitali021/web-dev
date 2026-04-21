from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import Product, Category
import json


@method_decorator(csrf_exempt, name='dispatch')
class ProductsListView(View):
    def get(self, request):
        products = Product.objects.filter(is_active=True)
        data = []
        for product in products:
            data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': product.category.id,
                'category_name': product.category.name
            })
        return JsonResponse(data, safe=False)
    
    def post(self, request):
        try:
            data = json.loads(request.body)
            category = Category.objects.get(id=data['category_id'])
            product = Product.objects.create(
                name=data['name'],
                price=data['price'],
                description=data.get('description', ''),
                count=data.get('count', 0),
                is_active=data.get('is_active', True),
                category=category
            )
            return JsonResponse({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': product.category.id,
                'category_name': product.category.name
            }, status=201)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)


@method_decorator(csrf_exempt, name='dispatch')
class ProductDetailView(View):
    def get(self, request, id):
        try:
            product = Product.objects.get(id=id, is_active=True)
            data = {
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category_id': product.category.id,
                'category_name': product.category.name
            }
            return JsonResponse(data)
        except Product.DoesNotExist:
            return JsonResponse({'error': 'Product not found'}, status=404)


@method_decorator(csrf_exempt, name='dispatch')
class CategoriesListView(View):
    def get(self, request):
        categories = Category.objects.all()
        data = []
        for category in categories:
            data.append({
                'id': category.id,
                'name': category.name
            })
        return JsonResponse(data, safe=False)
    
    def post(self, request):
        try:
            data = json.loads(request.body)
            category = Category.objects.create(
                name=data['name']
            )
            return JsonResponse({
                'id': category.id,
                'name': category.name
            }, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)


@method_decorator(csrf_exempt, name='dispatch')
class CategoryDetailView(View):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
            data = {
                'id': category.id,
                'name': category.name
            }
            return JsonResponse(data)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)


@method_decorator(csrf_exempt, name='dispatch')
class CategoryProductsView(View):
    def get(self, request, id):
        try:
            category = Category.objects.get(id=id)
            products = category.products.filter(is_active=True)
            data = []
            for product in products:
                data.append({
                    'id': product.id,
                    'name': product.name,
                    'price': product.price,
                    'description': product.description,
                    'count': product.count,
                    'is_active': product.is_active
                })
            return JsonResponse(data, safe=False)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)