#!/usr/bin/env python3
"""
Optiver-style 8-Minute Mental Math Test Trainer
Simulates the 80 questions in 8 minutes numerical test used in quant trading interviews.
"""

import time
import random
import sys

def generate_question():
    q_type = random.choice(['add', 'sub', 'mul', 'div', 'fraction'])
    
    if q_type == 'add':
        a = random.randint(11, 99)
        b = random.randint(11, 99)
        ans = a + b
        q_str = f"{a} + {b}"
    elif q_type == 'sub':
        a = random.randint(30, 150)
        b = random.randint(11, 99)
        ans = a - b
        q_str = f"{a} - {b}"
    elif q_type == 'mul':
        a = random.randint(3, 19)
        b = random.randint(11, 29)
        ans = a * b
        q_str = f"{a} * {b}"
    elif q_type == 'div':
        b = random.randint(3, 16)
        ans = random.randint(4, 25)
        a = ans * b
        q_str = f"{a} / {b}"
    else:  # fraction
        denom = random.choice([4, 5, 8, 10, 16, 20, 25, 50])
        num = random.randint(1, denom - 1)
        ans = round(num / denom, 4)
        q_str = f"{num}/{denom} (decimal)"
        
    return q_str, ans

def main():
    print("=" * 60)
    print("     OPTIVER-STYLE MENTAL MATH TEST (8 MINUTES / 80 QUESTIONS)")
    print("=" * 60)
    print("Goal: Score 50+ points in 8 minutes.")
    print("Scoring: +1 for correct, -1 for incorrect/pass.")
    print("Type 'q' to quit at any time.\n")
    
    input("Press ENTER to start the 8-minute timer...")
    
    duration = 480  # 8 minutes in seconds
    start_time = time.time()
    score = 0
    total = 0
    correct = 0
    incorrect = 0
    
    for i in range(1, 81):
        elapsed = time.time() - start_time
        remaining = duration - elapsed
        if remaining <= 0:
            print("\nTIME IS UP!")
            break
            
        q_str, ans = generate_question()
        mins_rem = int(remaining // 60)
        secs_rem = int(remaining % 60)
        
        user_input = input(f"[{i}/80] [{mins_rem:02d}:{secs_rem:02d}] {q_str} = ").strip()
        
        if user_input.lower() == 'q':
            print("Test aborted by user.")
            break
            
        try:
            val = float(user_input)
            if abs(val - ans) < 1e-3:
                score += 1
                correct += 1
                print("  ✓ Correct! (+1)")
            else:
                score -= 1
                incorrect += 1
                print(f"  ✗ Wrong! Expected {ans} (-1)")
        except ValueError:
            score -= 1
            incorrect += 1
            print(f"  ✗ Invalid input! Expected {ans} (-1)")
            
        total += 1

    elapsed_total = time.time() - start_time
    print("\n" + "=" * 60)
    print("                    FINAL RESULTS")
    print("=" * 60)
    print(f"Time Taken:      {int(elapsed_total // 60)}m {int(elapsed_total % 60)}s / 8m 00s")
    print(f"Total Answered:  {total} / 80")
    print(f"Correct Answers: {correct}")
    print(f"Incorrect:       {incorrect}")
    print(f"Final Score:     {score} points")
    print("-" * 60)
    if score >= 50:
        print("RESULT: PASS! Outstanding mental arithmetic speed.")
    else:
        print("RESULT: PRACTICE NEEDED. Target score is 50+ points.")
    print("=" * 60)

if __name__ == "__main__":
    main()
