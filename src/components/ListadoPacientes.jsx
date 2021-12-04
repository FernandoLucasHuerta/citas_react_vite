import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen">
        {pacientes && pacientes.length ? ( <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Administra Tus {''}
                <span className="text-indigo-600 font-bold "> Pacientes y Citas</span>
            </p>

        {pacientes.map((paciente) => (
            <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
            />
        ))}
        </>
                ) : <>
                        <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
                        <p className="text-lg mt-5 text-center mb-10">
                            Comienza Agregando Pacientes {''}
                            <span className="text-indigo-600 font-bold "> Y Apareceran En Este Lugar</span>
                        </p>
                    </>}
                </div>
            )
}

export default ListadoPacientes     
