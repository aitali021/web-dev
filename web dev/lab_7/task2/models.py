class Animal:
    """Parent class - Animal"""
    def __init__(self, aty, zhasy, rengi):
        """Constructor: 3 attributes"""
        self.aty = aty
        self.zhasy = zhasy
        self.rengi = rengi
    
    def dauys_shygar(self):
        """Instance method 1"""
        return "Januar dauysy"
    
    def aqparat(self):
        """Instance method 2"""
        return f"Aty: {self.aty}, Zhasy: {self.zhasy}, Rengi: {self.rengi}"
    
    def __str__(self):
        """String representation"""
        return f"{self.aty} ({self.__class__.__name__}) - Zhasy: {self.zhasy}, Rengi: {self.rengi}"


class It(Animal):
    """Child class 1 - It (Dog)"""
    
    def __init__(self, aty, zhasy, rengi, turi):
        """Unikaldy attribute: turi (breed)"""
        super().__init__(aty, zhasy, rengi)
        self.turi = turi
    
    def dauys_shygar(self):
        """Override parent method"""
        return "Vov Vov"
    
    def dop_oynau(self):
        """Unique method for It"""
        return f"{self.aty} doppen oinap zhur"
    
    def __str__(self):
        """Override string representation"""
        return f"{self.aty} (It) - {self.turi}, Zhasy: {self.zhasy}, Rengi: {self.rengi}"


class Mysyk(Animal):
    """Child class 2 - Mysyk (Cat)"""
    
    def __init__(self, aty, zhasy, rengi, uydegi=True):
        """Unikaldy attribute: uydegi (is_indoor)"""
        super().__init__(aty, zhasy, rengi)
        self.uydegi = uydegi
    
    def dauys_shygar(self):
        """Override parent method"""
        return "Myay Myay"
    
    def tyrmaudy(self):
        """Unique method for Mysyk"""
        return f"{self.aty} divanmen oinap zhur"
    
    def __str__(self):
        """Override string representation"""
        uy_status = "Uydegi" if self.uydegi else "Syrtagy"
        return f"{self.aty} (Mysyk) - {uy_status}, Zhasy: {self.zhasy}, Rengi: {self.rengi}"