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

  @PrimaryColumn()
  symbol: string;

  @Column({ name: "last_timestamp", type: "bigint" })
  lastTimestamp: number;

  @Column({ name: "is_faucet", type: "int" })
  isFaucet: number;

  @Column({ name: "package_id" })
  packageId: string;
}
