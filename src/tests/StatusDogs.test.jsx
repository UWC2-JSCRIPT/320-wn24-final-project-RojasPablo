import { describe, it } from "vitest";
import { screen, render } from '@testing-library/react';
import StatusDogs from '../GalleryComponents/StatusDogs';

describe('HTTP Status Dogs Tests', () => {
    const statusDogSampleData = [
        {
            "image": "https://http.dog/100.jpg",
            "statusCode": 100,
            "description": "Continue"
        }
    ]

    it('should render Gallery component', () => {
        render(<StatusDogs image={statusDogSampleData[0].image} statusCode={statusDogSampleData[0].statusCode} description={statusDogSampleData[0].description}/>);
        screen.debug(); 
    });
});