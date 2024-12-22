import { AppDataSource } from "../config/db.config";
import { Movimiento } from "../entities/movimiento";
import { EstadoAuditoria } from "../enums/estado-auditoria";



const repository = AppDataSource.getRepository(Movimiento);

export const insertarMovimiento = async (data: Partial<Movimiento>): Promise<Movimiento> =>{
const newMovimiento: Movimiento= await repository.save(data);
return await repository.findOne({where: {idMovimiento: newMovimiento.idMovimiento}});
}

export const listarMovimiento = async  ():Promise<Movimiento[]> => {
    return await repository.find({where: {estadoAuditoria: EstadoAuditoria.ACTIVO}});
}

export const obtenerMovimiento = async (idMovimiento: number): Promise<Movimiento> => {
    return await repository.findOne({where: {idMovimiento}})
}

export const actualizarMovimiento =async (idMovimiento: number,data: Partial<Movimiento>): Promise<Movimiento> => {
    await repository.update(idMovimiento,data);
    return obtenerMovimiento(idMovimiento);
}

export const darBajaMovimiento =async (idMovimiento: number):  Promise<void> =>{
    await repository.update(idMovimiento,{estadoAuditoria: EstadoAuditoria.INACTIVO});
}