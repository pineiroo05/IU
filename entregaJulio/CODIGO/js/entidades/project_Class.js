class project{
    constructor(){
        this.entidad="project";
        this.attributes=['id_project', 'name_project', 'start_date_project', 'end_date_project', 'responsable_project', 'organization_project', 'description_project', 'nuevo_file_project', 'file_project', 'code_project', 'acronym_project', 'id_sampling_project'];
    }

    //Al usar input date los limites de mes dia etc ya los maneja el
    start_date_project_personalized_validation(){
        const fechaInicio=document.getElementById('start_date_project').value;
        const fechaFin=document.getElementById('end_date_project').value;
        if(fechaInicio>fechaFin){
            return "fecha_inicio_mayor_fin_KO";
        }
        return true;
    }

    end_date_project_personalized_validation(){
        const fechaInicio=document.getElementById('start_date_project').value;
        const fechaFin=document.getElementById('end_date_project').value;
        if(fechaFin<fechaInicio){
            return "fecha_fin_menor_inicio_KO";
        }
        return true;
    }

}