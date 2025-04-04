import { Component } from '@angular/core';
import { BlogItemEntity } from '../sharing/models/blog/blog.model';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogItemComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

    items: BlogItemEntity[] = [
      {
        id: '123e4567-e89b-12d3-a456-426614174000',
        header: 'Onboard Computers in Drones',
        explanation: 'A step-by-step guide on training a custom YOLO model to detect trees using drone imagery.',
        imageUrl: 'assets/blog-yolo-trees.jpg'
      },
      {
        id: 'e3f2c1a4-5b6d-4c8e-9f7a-123456789abc',
        header: 'Wiring Raspberry Pi to Pixhawk',
        explanation: 'Learn how to connect a Raspberry Pi to a Pixhawk flight controller for advanced drone control.',
        imageUrl: 'assets/blog-pi-pixhawk.jpg'
      },
      {
        id: 'e3f2c1a4-5b6d-4c8e-9f7a-123456789abc',
        header: 'Why I Chose ArduPilot Over PX4',
        explanation: 'A detailed comparison of ArduPilot and PX4, and why I chose ArduPilot for my drone projects.',
        imageUrl: 'assets/blog-ardupilot.jpg'
      },
      {
        id: 'e3f2c1a4-5b6d-4c8e-9f7a-123456789abc',
        header: 'Onboard Computers in Drones: Industry Use Cases and Applications',
        explanation: 'Explore how onboard computers are transforming drones across agriculture, surveillance, delivery, inspection, and industrial applications.',
        imageUrl: 'assets/blog-ardupilot.jpg'
      }        
    ];
    
    constructor(private router: Router) { 
      
    }


    GetDetail(id: string) {
      console.log('Get Blog Detail', id);
      this.router.navigate(['/blog/detail', id]);
    }

}
