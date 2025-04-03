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
        id: '123',
        header: 'How I Trained My Own YOLO Model for Trees',
        explanation: 'A step-by-step guide on training a custom YOLO model to detect trees using drone imagery.',
        imageUrl: 'assets/blog-yolo-trees.jpg'
      },
      {
        id: '124',
        header: 'Wiring Raspberry Pi to Pixhawk',
        explanation: 'Learn how to connect a Raspberry Pi to a Pixhawk flight controller for advanced drone control.',
        imageUrl: 'assets/blog-pi-pixhawk.jpg'
      },
      {
        id: '24242',
        header: 'Why I Chose ArduPilot Over PX4',
        explanation: 'A detailed comparison of ArduPilot and PX4, and why I chose ArduPilot for my drone projects.',
        imageUrl: 'assets/blog-ardupilot.jpg'
      },
      {
        id: '1241241',
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
