from app import app, db
from app import User, Category, Product
from flask_bcrypt import Bcrypt
import random

bcrypt = Bcrypt()

# Sample data
def seed_data():
    with app.app_context():
        # Clear existing data
        db.drop_all()
        db.create_all()
        
        print("Creating admin user...")
        # Create admin user
        admin_password = bcrypt.generate_password_hash('admin123').decode('utf-8')
        admin = User(
            name='Admin User',
            email='admin@example.com',
            password=admin_password,
            is_admin=True
        )
        db.session.add(admin)
        
        # Create regular user
        user_password = bcrypt.generate_password_hash('user123').decode('utf-8')
        user = User(
            name='Regular User',
            email='user@example.com',
            password=user_password,
            is_admin=False
        )
        db.session.add(user)
        
        print("Creating categories...")
        # Create categories
        categories = [
            Category(name='Traditional', description='Traditional embroidered clothing with cultural designs'),
            Category(name='Formal', description='Elegant formal wear for special occasions'),
            Category(name='Casual', description='Comfortable casual wear with embroidery accents'),
            Category(name='Wedding', description='Luxurious wedding collection with premium embroidery'),
            Category(name='Accessories', description='Embroidered accessories to complement your outfit'),
            Category(name='Kids', description='Embroidered clothing for children')
        ]
        
        for category in categories:
            db.session.add(category)
        
        db.session.commit()
        
        print("Creating products...")
        # Create products
        products_data = [
            {
                'name': 'Traditional Embroidered Dress',
                'description': 'Beautiful hand-embroidered traditional dress with intricate patterns and vibrant colors.',
                'price': 89.99,
                'image': 'dress1.jpg',
                'stock': 10,
                'category_id': 1,
                'featured': True
            },
            {
                'name': 'Formal  1,
                'featured': True
            },
            {
                'name': 'Formal Embroidered Suit',
                'description': 'Elegant formal suit with delicate embroidery, perfect for special occasions.',
                'price': 129.99,
                'image': 'suit1.jpg',
                'stock': 7,
                'category_id': 2,
                'featured': True
            },
            {
                'name': 'Casual Embroidered Top',
                'description': 'Comfortable casual top with beautiful embroidery, ideal for everyday wear.',
                'price': 49.99,
                'image': 'top1.jpg',
                'stock': 15,
                'category_id': 3,
                'featured': False
            },
            {
                'name': 'Wedding Collection Dress',
                'description': 'Stunning wedding dress with premium embroidery and exquisite detailing.',
                'price': 399.99,
                'image': 'wedding1.jpg',
                'stock': 5,
                'category_id': 4,
                'featured': True
            },
            {
                'name': 'Embroidered Shawl',
                'description': 'Luxurious shawl with traditional embroidery patterns, perfect for adding elegance to any outfit.',
                'price': 29.99,
                'image': 'shawl1.jpg',
                'stock': 20,
                'category_id': 5,
                'featured': False
            },
            {
                'name': 'Kids Embroidered Outfit',
                'description': 'Adorable embroidered outfit for children, combining comfort with traditional designs.',
                'price': 39.99,
                'image': 'kids1.jpg',
                'stock': 12,
                'category_id': 6,
                'featured': False
            }
        ]
        
        for product_data in products_data:
            product = Product(
                name=product_data['name'],
                description=product_data['description'],
                price=product_data['price'],
                image=product_data['image'],
                stock=product_data['stock'],
                category_id=product_data['category_id'],
                featured=product_data['featured']
            )
            db.session.add(product)
        
        db.session.commit()
        print("Database seeded successfully!")

if __name__ == '__main__':
    seed_data()

