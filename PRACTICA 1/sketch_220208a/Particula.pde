class Particulas {
  PVector position;
  
  PVector velocidad;
  float temperatura;
  
  PVector acceleration;
  
  
  float tono;
  color rojo = color(210, 26, 26);
  color azul = color(26, 37, 210);
  color amarillo = color(210, 193, 26);
  
  // 0 norte 
  // 1 sur 
  // 2 este 
  // 3 oeste 
  
  Particulas(PVector origen, float temperaturaA, float velocidadAnimacion) {
   
   acceleration = new PVector(-0.01 + velocidadAnimacion, 0);
   velocidad = new PVector(random(-2, 0), random(-1, 1));
    

    position = origen.copy();
    tono = 255.0;
    
    temperatura = temperaturaA;
  }

  void run() {
    actualizar();
    mostrar();
  }

  void actualizar() {
    velocidad.add(acceleration);
    position.add(velocidad);
    tono -= 1.0;
  }

  void mostrar() {
    if(temperatura < 25) {
      stroke(azul, tono);
      fill(azul, tono);
    } else if(temperatura > 37) {
      stroke(rojo, tono);
      fill(rojo, tono);
    } else {
      stroke(amarillo, tono);
      fill(amarillo, tono);
    }
    
    ellipse(position.x, position.y, 8, 8);
  }

  boolean finalizo() {
    if (tono < 155.0) {
      return true;
    } else if (tono < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
