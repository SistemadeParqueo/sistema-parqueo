import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movimientos')
export class Movimiento{
    @PrimaryGeneratedColumn({name:'id_movimiento'})
    idMovimiento: number;

    @Column({name: 'nombre'})
    nombre:  string;

    @Column({name: 'estado_auditoria'})
    estadoAuditoria: String;

    @CreateDateColumn({name: 'fecha_creacion_auditoria'})
    fechaCreacionAuditoria: Date;
}