from models import Animal, It, Mysyk

def main():
    print("OOP DEMONSTRATION - ANIMAL HIERARCHY")
    
    print("\n1. OBEKT JASAU:")
    print("-" * 30)
    
    
    zhalpy_animals = Animal("Januar", 5, "Qonyr")
    print(f"Jasaldy: {zhalpy_animals}")
    
    
    it1 = It("Rex", 3, "Altyn", "Labrador")
    it2 = It("Dos", 2, "Qara", "Nemec kusandy")
    print(f"Jasaldy: {it1}")
    print(f"Jasaldy: {it2}")
    
    
    mysyk1 = Mysyk("Mor", 4, "Aq", True)
    mysyk2 = Mysyk("Tom", 2, "Sur", False)
    print(f"Jasaldy: {mysyk1}")
    print(f"Jasaldy: {mysyk2}")
    
    
    print("\n2. LISTKE SALU:")
    print("-" * 30)
    januarylar = [zhalpy_animals, it1, it2, mysyk1, mysyk2]
    
    
    print("\n3. LISTKE AINALU:")
    print("-" * 30)
    for januar in januarylar:
        print(januar)
    
    
    print("\n4. METODTAR_SHAQYRU:")
    print("-" * 30)
    
    for januar in januarylar:
        print(f"\n{januar.aty}:")
        print(f"  Aqparat: {januar.aqparat()}")
        print(f"  Dauys: {januar.dauys_shygar()}")
        
        
        if isinstance(januar, It):
            print(f"  Arnaýly: {januar.dop_oynau()}")
        elif isinstance(januar, Mysyk):
            print(f"  Arnaýly: {januar.tyrmaudy()}")
    
    
    print("\n5. POLYMORPHISM:")
    print("-" * 30)
    
    def dauys_andy(animal):
        """Funktsia polymorphism korsetu ushin"""
        return f"{animal.aty} aitady: {animal.dauys_shygar()}"
    
    for januar in januarylar:
        print(dauys_andy(januar))

if __name__ == "__main__":
    main()