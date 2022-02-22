class SistemaParticulas {
  ArrayList<Particulas> particulas;
  PVector origen;

  SistemaParticulas(PVector position) {
    origen = position.copy();
    particulas = new ArrayList<Particulas>();
  }

  void agregarParticula( float temperatura, float velocidadAnimacion) {
    particulas.add(new Particulas(origen,  temperatura, velocidadAnimacion));
  }

  void run() {
    for (int i = particulas.size()-1; i >= 0; i--) {
      Particulas p = particulas.get(i);
      p.run();
      if (p.finalizo()) {
        particulas.remove(i);
      }
    }
  }
}
