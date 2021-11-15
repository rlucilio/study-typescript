function firstFactoryDecorator() {
    console.log('[Fábrica1] - Criando decorator');
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('[Decorator1] - Executando decorator')
    }
}

function secondFactoryDecorator() {
    console.log('[Fábrica2] - Criando decorator');
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log('[Decorator2] - Executando decorator')
    }
}

class TestClass {
    @secondFactoryDecorator()
    @firstFactoryDecorator()
    @secondFactoryDecorator()
    method() {
        console.log('[Método] - Executando o método');
    }
}

new TestClass().method();