function FirstComponent() {
    //algum comentraio
    const name = "jozinha";

    return (
        <div className="firstcomponent">
            <p>Primeiro Componente</p>
            <p>Nome: {name}</p>
            {2+2};
        </div>
    );
}

export default FirstComponent