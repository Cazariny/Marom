
const expect = require('chai').expect
const marom = require('..').default

describe('#marom', function(){


  it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function(){
    const translation = marom ("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translation = marom ("Zorro")
    const translation2 = marom ("Zarpar")

    expect(translation).to.equal('Zorrope')
    expect(translation2).to.equal('Zarppe')
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio', function(){
    const translation = marom("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function(){
    const translation =marom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})
