import {
  Column,
  Entity,
  Index,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';

@Entity('faucet')
export class FaucetEntity {
  @PrimaryColumn()
  account: string;

  @Column()
  symbol: string;

  @CreateDateColumn({ name: "last_timestamp" })
  lastTimestamp: Date;
}
