import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TcpClientOptions, Transport } from '@nestjs/microservices';

@Injectable()
export class RmqService {
  constructor(private readonly configService: ConfigService) {}

  getOptions(queue: string): TcpClientOptions {
    return {
      transport: Transport.TCP,
      options: {
        host: this.configService.get('RMQ_HOST', 'localhost'),
        port: this.configService.get(`RMQ_${queue.toUpperCase()}_PORT`, 3001),
      },
    };
  }
}