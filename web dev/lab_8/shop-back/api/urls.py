from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.ProductsListView.as_view(), name='products-list'),
    path('products/<int:id>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('categories/', views.CategoriesListView.as_view(), name='categories-list'),
    path('categories/<int:id>/', views.CategoryDetailView.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', views.CategoryProductsView.as_view(), name='category-products'),
]