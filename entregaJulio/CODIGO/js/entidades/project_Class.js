class project{
    constructor(){
        this.entidad="project";
        this.attributes=['id_project', 'name_project', 'start_date_project', 'end_date_project', 'responsable_project', 'organization_project', 'description_project', 'nuevo_file_project', 'file_project', 'code_project', 'acronym_project', 'id_sampling_methodology'];
    }

    start_date_project_personalized_validation(){
        const elemInicio=document.getElementById('start_date_project');
        const elemFin=document.getElementById('end_date_project');

        if(!elemFin || !elemInicio){
            return true;
        }

        const fechaInicio=elemInicio.value;
        const fechaFin=elemFin.value;

        const [diaInicio, mesInicio, anoInicio]=fechaInicio.split('/');
        const [diaFin, mesFin, anoFin]=fechaFin.split('/');

        const inicio=new Date(anoInicio, mesInicio-1, diaInicio); //al mes se quita 1 pq Date trabaja desde 0 a 11
        const fin=new Date(anoFin, mesFin-1, diaFin);

        if(inicio>fin){
            return "fecha_inicio_mayor_fin_KO";
        }
        return true;
    }

    end_date_project_personalized_validation(){
        const elemInicio=document.getElementById('start_date_project');
        const elemFin=document.getElementById('end_date_project');

        if(!elemFin || !elemInicio){
            return true;
        }

        const fechaInicio=elemInicio.value;
        const fechaFin=elemFin.value;

        const [diaInicio, mesInicio, anoInicio]=fechaInicio.split('/');
        const [diaFin, mesFin, anoFin]=fechaFin.split('/');

        const inicio=new Date(anoInicio, mesInicio-1, diaInicio); //al mes se quita 1 pq Date trabaja desde 0 a 11
        const fin=new Date(anoFin, mesFin-1, diaFin);

        if(fin<inicio){
            return "fecha_fin_menor_inicio_KO";
        }
        return true;
    }
}
